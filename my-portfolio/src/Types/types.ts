export interface JobsExperience {
  title: string,
  subtitle: string,
  description: string
}

export interface AcordionState {
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  titulo: string,
  descricao?: string,
  d1?: string,
  d2?: string,
  d3?: string,
  d4?: string,
  d5?: string,
  d6?: string,
  d7?: string,
  d8?: string,
  d9?: string
}
