const wrap =
  "flex h-6 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[3px] border border-border bg-white";

export function CardBrands() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-1.5"
      aria-label="Moyens de paiement acceptés"
    >
      {/* Visa */}
      <span className={wrap} title="Visa">
        <svg viewBox="0 0 48 16" className="h-3 w-9" role="img" aria-label="Visa">
          <text
            x="24"
            y="13"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="14"
            fontStyle="italic"
            fontWeight="700"
            fill="#1A1F71"
          >
            VISA
          </text>
        </svg>
      </span>

      {/* Mastercard */}
      <span className={wrap} title="Mastercard">
        <svg viewBox="0 0 36 22" className="h-4 w-7" role="img" aria-label="Mastercard">
          <circle cx="14" cy="11" r="9" fill="#EB001B" />
          <circle cx="22" cy="11" r="9" fill="#F79E1B" />
          <path
            d="M18 4.2a9 9 0 0 0 0 13.6 9 9 0 0 0 0-13.6Z"
            fill="#FF5F00"
          />
        </svg>
      </span>

      {/* American Express */}
      <span className={wrap} title="American Express">
        <svg viewBox="0 0 40 24" className="h-6 w-10" role="img" aria-label="American Express">
          <rect width="40" height="24" fill="#006FCF" />
          <text
            x="20"
            y="15"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="7.5"
            fontWeight="700"
            fill="#FFFFFF"
          >
            AMEX
          </text>
        </svg>
      </span>

      {/* Discover */}
      <span className={wrap} title="Discover">
        <svg viewBox="0 0 40 24" className="h-6 w-10" role="img" aria-label="Discover">
          <rect width="40" height="24" fill="#FFFFFF" />
          <path d="M18 24h22V10c-6 6-14 11-22 14Z" fill="#F76B1C" />
          <text
            x="20"
            y="12"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="6"
            fontWeight="700"
            fill="#231F20"
          >
            DISCOVER
          </text>
        </svg>
      </span>

      {/* Diners Club */}
      <span className={wrap} title="Diners Club">
        <svg viewBox="0 0 40 24" className="h-6 w-10" role="img" aria-label="Diners Club">
          <rect width="40" height="24" fill="#FFFFFF" />
          <circle cx="20" cy="12" r="8.5" fill="#0079BE" />
          <circle cx="20" cy="12" r="6" fill="#FFFFFF" />
          <path
            d="M20 6.6a5.4 5.4 0 0 1 0 10.8V6.6Z"
            fill="#0079BE"
          />
          <path d="M20 6.6a5.4 5.4 0 0 0 0 10.8" fill="none" />
          <path d="M14.6 12a5.4 5.4 0 0 0 5.4 5.4V6.6A5.4 5.4 0 0 0 14.6 12Z" fill="#0079BE" opacity="0.35" />
        </svg>
      </span>

      {/* JCB */}
      <span className={wrap} title="JCB">
        <svg viewBox="0 0 40 24" className="h-6 w-10" role="img" aria-label="JCB">
          <rect width="40" height="24" fill="#FFFFFF" />
          <rect x="4" y="4" width="10" height="16" rx="3" fill="#0E4C96" />
          <rect x="15" y="4" width="10" height="16" rx="3" fill="#BE0029" />
          <rect x="26" y="4" width="10" height="16" rx="3" fill="#008C44" />
          <text x="9" y="15" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="#fff">J</text>
          <text x="20" y="15" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="#fff">C</text>
          <text x="31" y="15" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="#fff">B</text>
        </svg>
      </span>
    </div>
  );
}
