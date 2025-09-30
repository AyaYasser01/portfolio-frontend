
export interface About {
  _id?: string; 
  description: string;
  skills: string[];
  education: Education;
  services: Service[];
  experience: Experience[];
}

export interface Education {
  degree: string;
  university: string;
  year: string;
}

export interface Service {
  name: string;
  description: string;
  icon: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  years: string;
  description: string;
}
