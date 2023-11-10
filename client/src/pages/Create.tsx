import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

interface Project {
  id: number;
  name: string;
}

const Create: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [projects, setProjects] = useState<Project[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    const validationErrors: string[] = [];

    if (!name.trim()) {
      validationErrors.push("Name is required");
    }

    setErrors(validationErrors);

    return validationErrors.length === 0;
  };

  const handleAddProject = () => {
    const isValid = validateForm();

    if (isValid) {
      const newProject: Project = {
        id: projects.length + 1,
        name: name.trim(),
      };

      setProjects([...projects, newProject]);
      setName("");
    }
  };

  return (
    <div>
      <h2 className="font-18 font-semibold mb-2">Створити новий проєкт</h2>
      <div className="mb-10">
        <Label>Назва проєкту:</Label>
        <TextInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <Button onClick={handleAddProject}>Додати</Button>

      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          <p>Please fix the following errors:</p>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <h2>Список проєктів</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Create;
