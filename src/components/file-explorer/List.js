import { useState } from "react";

const List = ({ node, addNewFolder, deleteFolder }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {node.map((item) => {
        return (
          <div key={item.id}>
            <div>
              {item.isFolder && (
                <span
                  className="expand-icon"
                  onClick={() =>
                    setIsExpanded((prev) => ({
                      ...prev,
                      [item.name]: !prev[item.name],
                    }))
                  }
                >
                  {isExpanded?.[item.name] ? " - " : " + "}
                </span>
              )}
              {item.name}
              {item.isFolder && (
                <button className="icon" onClick={() => addNewFolder(item.id)}>
                  Add Folder
                </button>
              )}
              <button className="icon" onClick={() => deleteFolder(item.id)}>
                Delete
              </button>
            </div>
            {isExpanded?.[item.name] && item.childern && (
              <List
                node={item.childern}
                addNewFolder={addNewFolder}
                deleteFolder={deleteFolder}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
