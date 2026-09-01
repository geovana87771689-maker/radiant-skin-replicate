import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";
import { toast } from "sonner";

const skinTones = ["Fair to Light", "Medium to Tan", "Deep to Rich"];
const skinTypes = ["Combination", "Dry", "Normal", "Oily"];
const ages = ["18-25", "26-35", "36-45", "46-55", "56-65", "Above 66"];

export function ReviewFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [skinTone, setSkinTone] = useState<string | null>(null);
  const [skinType, setSkinType] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const reset = () => {
    setRating(0);
    setHover(0);
    setSkinTone(null);
    setSkinType(null);
    setAge(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Thanks for your review!");
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 py-10">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3 className="text-base font-bold">Write a Review</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="max-h-[80vh] space-y-5 overflow-y-auto px-6 py-6">
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
            <input
              type="email"
              placeholder="john.smith@example.com"
              className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Rating</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  className="p-0.5"
                  aria-label={`${i} stars`}
                >
                  <Star
                    size={24}
                    className={
                      i <= (hover || rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Title of Review
            </label>
            <input
              type="text"
              placeholder="Give your review a title"
              className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          {/* Body */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              How was your overall experience?
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-border bg-muted px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          {/* Skin Tone */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Skin Tone</p>
            <div className="space-y-2">
              {skinTones.map((t) => (
                <label key={t} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={skinTone === t}
                    onChange={() => setSkinTone(skinTone === t ? null : t)}
                    className="size-4 accent-[#EF193F]"
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>

          {/* Skin Type */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Skin Type</p>
            <div className="space-y-2">
              {skinTypes.map((t) => (
                <label key={t} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={skinType === t}
                    onChange={() => setSkinType(skinType === t ? null : t)}
                    className="size-4 accent-[#EF193F]"
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>

          {/* Age */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Age</p>
            <div className="space-y-2">
              {ages.map((a) => (
                <label key={a} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={age === a}
                    onChange={() => setAge(age === a ? null : a)}
                    className="size-4 accent-[#EF193F]"
                  />
                  {a}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
