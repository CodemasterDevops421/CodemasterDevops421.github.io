import {
  achievements,
  achievementSchema,
  certifications,
  certificationSchema,
  education,
  educationSchema,
  experiences,
  experienceSchema,
  projects,
  projectSchema,
  publications,
  publicationSchema,
  skills,
  skillSchema,
} from "@/lib/data";

describe("data schemas", () => {
  it("validates experiences", () => {
    experiences.forEach((experience) => expect(() => experienceSchema.parse(experience)).not.toThrow());
  });

  it("validates projects", () => {
    projects.forEach((project) => expect(() => projectSchema.parse(project)).not.toThrow());
  });

  it("validates skills", () => {
    skills.forEach((skill) => expect(() => skillSchema.parse(skill)).not.toThrow());
  });

  it("validates certifications", () => {
    certifications.forEach((certification) => expect(() => certificationSchema.parse(certification)).not.toThrow());
  });

  it("validates education", () => {
    education.forEach((entry) => expect(() => educationSchema.parse(entry)).not.toThrow());
  });

  it("validates achievements", () => {
    achievements.forEach((achievement) => expect(() => achievementSchema.parse(achievement)).not.toThrow());
  });

  it("validates publications", () => {
    publications.forEach((publication) => expect(() => publicationSchema.parse(publication)).not.toThrow());
  });
});
