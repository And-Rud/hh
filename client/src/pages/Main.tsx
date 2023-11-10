import { Label, Pagination, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { dataI } from "../interface";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const list = useSelector((state: RootState) => state.project.list);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const initialData: dataI[] = [
    {
      id: 123,
      name: "Building bridge",
    },
    {
      id: 456,
      name: "Building road",
    },
    {
      id: 789,
      name: "Creating web-site",
    },
  ];

  const [sortedData, setSortedData] = useState<dataI[]>(initialData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortClick = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return newSortOrder === "asc" ? comparison : -comparison;
    });
    setSortedData(sorted);
    setSortOrder(newSortOrder);
  };
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<dataI[]>(initialData);
  const [selectedProject, setSelectedProject] = useState<dataI | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredProjects = initialData.filter((project) =>
      project.name.toLowerCase().includes(term)
    );

    setSearchResults(filteredProjects);
  };

  const handleSelect = (selectedProject: dataI) => {
    setSearchTerm(selectedProject.name);
    setSearchResults([]);
    setSelectedProject(selectedProject);
  };

  return (
    <div>
      <div className="flex max-w-md mb-2 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Small input" />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            placeholder="Search project"
            value={searchTerm}
            onChange={handleSearch}
            list="projectList"
          />
          <datalist id="projectList">
            {initialData.map((project) => (
              <option
                key={project.id}
                value={project.name}
                onClick={() => handleSelect(project)}
              />
            ))}
          </datalist>
          {selectedProject && (
            <div>
              <h2>Selected Project</h2>
              <p>Name: {selectedProject.name}</p>
            </div>
          )}
        </div>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="cursor-pointer" onClick={handleSortClick}>
            Project name
          </Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {selectedProject ? (
          <div>
            <h2>Selected Project</h2>
            <p>Name: {selectedProject.name}</p>
          </div>
        ) : (
          <Table.Body className="divide-y">
            {sortedData.map((item) => (
              <Table.Row
                key={item.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>

                <Table.Cell>
                  <a
                    href="/"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        )}
      </Table>
      <div className="flex overflow-x-auto mt-10 sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default Main;
