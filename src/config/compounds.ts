export interface Compound {
  name: string;
  city: string;
  type: "كمبوند" | "حي" | "برج";
}

export const compounds: Compound[] = [
  { name: "كمبوند الواحة", city: "الرياض", type: "كمبوند" },
  { name: "كمبوند رافال", city: "الرياض", type: "كمبوند" },
  { name: "كمبوند السفارات", city: "الرياض", type: "كمبوند" },
  { name: "كمبوند الحمراء", city: "الرياض", type: "كمبوند" },
  { name: "كمبوند العريجاء", city: "الرياض", type: "كمبوند" },
  { name: "حي الملقا", city: "الرياض", type: "حي" },
  { name: "حي الياسمين", city: "الرياض", type: "حي" },
  { name: "حي النرجس", city: "الرياض", type: "حي" },
  { name: "أبراج بوابة الرياض", city: "الرياض", type: "برج" },
  { name: "كمبوند الشراع", city: "جدة", type: "كمبوند" },
  { name: "كمبوند دار الحكمة", city: "جدة", type: "كمبوند" },
  { name: "حي أبحر الشمالية", city: "جدة", type: "حي" },
  { name: "كمبوند أرامكو", city: "الظهران", type: "كمبوند" },
  { name: "كمبوند سعد", city: "الخبر", type: "كمبوند" },
];