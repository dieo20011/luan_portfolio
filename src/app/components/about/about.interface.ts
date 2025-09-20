export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    description?: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    verificationUrl?: string;
    description?: string;
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}

export interface Skill {
    category: string;
    items: string[];
}
