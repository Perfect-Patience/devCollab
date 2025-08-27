import BlueNavBar from '@/components/BlueNavBar'
import {useState} from 'react'



const dummyNotifications = [
  {
    id: 1,
    type: "request_received",
    message: "You received a collaboration request from Jane Doe.",
    projectName: "E-commerce Platform",
    time: "09:15 AM",
    date: "2025-08-27",
    status: "unread",
  },
  {
    id: 2,
    type: "request_sent",
    message: "You sent a collaboration request to Michael Lee.",
    projectName: "AI Chatbot Assistant",
    time: "08:45 AM",
    date: "2025-08-27",
    status: "read",
  },
  {
    id: 3,
    type: "project_added",
    message: "A new project was added by Alex.",
    projectName: "Task Manager Pro",
    time: "04:30 PM",
    date: "2025-08-26",
    status: "unread",
  },
  {
    id: 4,
    type: "request_accepted",
    message: "Your collaboration request to Sarah was accepted!",
    projectName: "Health Tracker",
    time: "02:10 PM",
    date: "2025-08-26",
    status: "read",
  },
  {
    id: 5,
    type: "request_denied",
    message: "Your collaboration request to David was denied.",
    projectName: "Portfolio Website",
    time: "06:45 PM",
    date: "2025-08-24",
    status: "read",
  },
];


const groupByDate = (notifications) => {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  return {
    Today: notifications.filter((n) => n.date === today),
    Yesterday: notifications.filter((n) => n.date === yesterday),
    Earlier: notifications.filter(
      (n) => n.date !== today && n.date !== yesterday
    ),
  };
};

function NotificationPage() {

   const [notifications, setNotifications] = useState(dummyNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: "read" } : n
      )
    );
  }; 

  const grouped = groupByDate(notifications);

  return (
    <div>
        <BlueNavBar/>
        <section>
<div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {Object.entries(grouped).map(([group, items]) =>
        items.length > 0 ? (
          <div key={group} className="mb-6">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">{group}</h2>
            <div className="space-y-3">
              {items.map((n) => (
                <div
                  key={n.id}
                  className={`p-4 rounded-lg shadow-sm border transition ${
                    n.status === "unread"
                      ? "bg-slate-50 border-slate-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-800">{n.message}</p>
                      {n.projectName && (
                        <p className="text-sm text-gray-600 mt-1">
                          Project:{" "}
                          <span className="font-medium">{n.projectName}</span>
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                    </div>

                    {n.status === "unread" && (
                      <button
                        onClick={() => markAsRead(n.id)}
                        className="ml-4 text-sm px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
        </section>
    </div>
  )
}

export default NotificationPage