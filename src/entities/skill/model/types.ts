import { Specialization } from "@/entities/specialization/model/types";

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  specializations?: Specialization[];
}
