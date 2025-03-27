import { useState } from "react";
import json from "./data.json";
import List from "./List";

export default function FileExplorer() {
  const [data, setData] = useState(json);

  const addNewFolder = (parentId) => {
    const name = prompt("enter name");
    const updateNode = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            childern: [
              ...node.childern,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                childern: [],
              },
            ],
          };
        }
        if (node.childern) {
          return { ...node, childern: updateNode(node.childern) };
        }
        return node;
      });
    };
    if (data.length === 0) {
      let newnode = [
        {
          id: parentId,
          name: name,
          isFolder: true,
          childern: [],
        },
      ];
      console.log(data, name, newnode);
      setData(newnode);
    } else {
      setData((prev) => updateNode(prev));
    }
  };

  const deleteFolder = (parentId) => {
    const updateNode = (list) => {
      return list
        .filter((node) => node.id !== parentId)
        .map((node) => {
          if (node.childern) {
            return {
              ...node,
              childern: updateNode(node.childern),
            };
          }
          return node;
        });
    };
    setData((prev) => updateNode(prev));
  };
  return (
    <div className="App">
      <h1>File Explorer</h1>
      {data.length === 0 && (
        <button onClick={() => addNewFolder(Date.now().toString())}>
          Add Folder
        </button>
      )}
      <List
        node={data}
        addNewFolder={addNewFolder}
        deleteFolder={deleteFolder}
      />
    </div>
  );
}
