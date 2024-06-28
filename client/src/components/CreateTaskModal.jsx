import { useState } from "react";
import { Modal } from "./Modal";
import { apiUrl } from "../lib/constants";
import { useQueryClient } from "react-query";


export const CreateTaskModal = ({ onRequestClose, open }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch(`${apiUrl}/api/v1/tasks/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await resp.json();

    if (data.success) {
      queryClient.setQueryData("getAllTasks", (oldData) => ({
        tasks: [...oldData.tasks, data.task],
      }));
      onRequestClose();
    } else if (data.error) {
      setError(data.error);
    }
  };

  return (
    <Modal onRequestClose={onRequestClose} isOpen={open}>
      <div>
        <h2 className="text-center text-xl">Create a Task</h2>
        <p className="mt-3">
          
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <label>Title</label>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="title.."
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <label>Description</label>
          <textarea
            rows={5}
            type="text"
            className="input"
            name="title"
            placeholder="description.."
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          {error ? <p className="text-red-300">{error}</p> : null}
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Done
            </button>
            <button type="button" onClick={onRequestClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
