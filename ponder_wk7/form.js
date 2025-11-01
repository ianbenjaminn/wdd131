// ===== Element refs =====
const form = document.querySelector('#checkoutForm');
const paymentSelect = document.querySelector('#paymentMethod');

const creditCardSection = document.querySelector('#creditCardSection');
const paypalSection     = document.querySelector('#paypalSection');

const cardNumberInput = document.querySelector('#creditCardNumber');
const paypalInput     = document.querySelector('#paypalUsername');
const monthInput      = document.querySelector('#month');
const yearInput       = document.querySelector('#year');

const errorsEl  = document.querySelector('.errors');
const successEl = document.querySelector('.success');

// ===== Helpers =====
function displayError(msg)   { errorsEl.textContent  = msg || ''; }
function displaySuccess(msg) { successEl.textContent = msg || ''; }

// remove ALL non-digits (spaces, hyphens, NBSP, etc.)
function normalizeDigits(value) {
  return (value || '').replace(/\D/g, '');
}

// exact card number check (only this one is valid for the assignment)
function isExactCardNumber(numDigitsOnly) {
  return numDigitsOnly === '1234123412341234';
}

function isValidMonth(mm) {
  const n = Number(mm);
  return Number.isInteger(n) && n >= 1 && n <= 12;
}

// Valid through end of printed month
function isExpired(mm, yy) {
  const m = Number(mm);
  const y = Number(yy);
  if (!Number.isInteger(m) || !Number.isInteger(y)) return true;

  // boundary = first day of the month after the printed expiry
  const boundary = new Date(2000 + y, m); // JS month is 0-based; m here is the NEXT month
  const now = new Date();
  return now >= boundary;
}

// ===== Toggle payment details =====
function togglePaymentDetails(value) {
  // hide both & remove requireds
  paypalSection.classList.add('hide');
  creditCardSection.classList.add('hide');
  if (paypalInput)     paypalInput.required     = false;
  if (cardNumberInput) cardNumberInput.required = false;

  // show selected & set requireds
  if (value === 'creditCard') {
    creditCardSection.classList.remove('hide');
    if (cardNumberInput) cardNumberInput.required = true;
    // focus the first field for convenience
    cardNumberInput?.focus();
  } else if (value === 'paypal') {
    paypalSection.classList.remove('hide');
    if (paypalInput) paypalInput.required = true;
    paypalInput?.focus();
  }

  paymentSelect.setAttribute(
    'aria-expanded',
    value === 'creditCard' || value === 'paypal' ? 'true' : 'false'
  );
}

// ===== UX niceties =====
// Format CC visually as #### #### #### #### while typing
cardNumberInput?.addEventListener('input', () => {
  const digits = normalizeDigits(cardNumberInput.value).slice(0, 16);
  cardNumberInput.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
});

// Auto-advance MM -> YY, and restrict to digits
monthInput?.addEventListener('input', (e) => {
  const v = normalizeDigits(e.target.value).slice(0, 2);
  e.target.value = v;
  if (v.length === 2) yearInput?.focus();
});
yearInput?.addEventListener('input', (e) => {
  e.target.value = normalizeDigits(e.target.value).slice(0, 2);
});

// Initialize UI on load (prevents “nothing shown” state)
document.addEventListener('DOMContentLoaded', () => {
  togglePaymentDetails(paymentSelect.value);
});

// Change handler
paymentSelect.addEventListener('change', (e) => {
  togglePaymentDetails(e.target.value);
});

// ===== Submit =====
form.addEventListener('submit', (event) => {
  event.preventDefault();
  displayError('');
  displaySuccess('');

  let errorMsg = '';

  // If credit card is chosen, validate the card number + expiry
  if (paymentSelect.value === 'creditCard') {
    const rawDigits = normalizeDigits(cardNumberInput.value);

    if (rawDigits.length !== 16) {
      errorMsg += 'Card number must be 16 digits\n';
    } else if (!isExactCardNumber(rawDigits)) {
      errorMsg += 'Card number is not valid\n';
    }

    const mm = monthInput.value;
    const yy = yearInput.value;

    if (!isValidMonth(mm)) {
      errorMsg += 'Expiration month must be 01–12\n';
    }
    if (!/^\d{2}$/.test(yy)) {
      errorMsg += 'Expiration year must be two digits (e.g., 27)\n';
    }

    if (!errorMsg && isExpired(mm, yy)) {
      errorMsg += 'Card is expired\n';
    }
  }

  if (errorMsg) {
    displayError(errorMsg);
    return;
  }

  // SUCCESS feedback (keep form on screen; button stays)
  const name  = (document.querySelector('#fullName')?.value || '').trim();
  const email = (document.querySelector('#email')?.value || '').trim();
  const last4 = normalizeDigits(cardNumberInput?.value || '').slice(-4);

  displaySuccess(
    `Payment approved. Card ending in ${last4}.
${email ? `A confirmation will be sent to ${email}.` : ''}`
  );

  // disable the button to prevent double-submit (keep visible)
  const btn = form.querySelector('button[type="submit"]');
  if (btn) {
    btn.textContent = 'Order Placed';
    btn.style.opacity = '0.85';
    btn.style.cursor = 'default';
  }
});
  