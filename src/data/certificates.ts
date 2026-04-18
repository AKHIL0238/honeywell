export interface CertRecord {
  id: string;
  name: string;
  issuedOn: string;
}

export const certificates: CertRecord[] = [
  { id: "5763758", name: "U Akhil",   issuedOn: "Apr 15, 2026" },
  { id: "5763759", name: "B Vinod",   issuedOn: "Apr 15, 2026" },
  { id: "5763760", name: "B Abhiram", issuedOn: "Apr 15, 2026" },
  { id: "5763761", name: "N Pujith",  issuedOn: "Apr 15, 2026" },
  { id: "5763762", name: "M Kumar",   issuedOn: "Apr 15, 2026" },
];

export function getCertById(id: string): CertRecord | undefined {
  return certificates.find((c) => c.id === id);
}
