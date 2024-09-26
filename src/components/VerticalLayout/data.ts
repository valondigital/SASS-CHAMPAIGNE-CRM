export const sidebarLinks = [
  {
    path: "/dashboard",
    icon: "bx bx-home-circle",
    label: "Dashboard",
  },
  {
    path: "/projects-grid",
    icon: "bx bx-file",
    label: "Accounts",
  },
  {
    path: "/ecommerce-customers",
    icon: "bx bx-file",
    label: "Contacts",
  },
  {
    path: "/tasks-kanban",
    icon: "bx bx-file",
    label: "Deals",
  },
  {
    path: "/#",
    icon: "bx bx-user",
    label: "User Management",
    children: [
      { path: "/apex-charts", label: "Roles" },
      { path: "/e-charts", label: "Permissions" },
      { path: "/contacts-list", label: "Users" },
    ],
  },
  {
    path: "/calendar",
    icon: "bx bx-calendar",
    label: "Calendar",
  },
  {
    path: "/chat",
    icon: "bx bx-chat",
    label: "Conversations",
  },

  {
    path: "/email-inbox",
    icon: "bx bx-file",
    label: "Emails",
  },
  {
    path: "/invoices-list",
    icon: "bx bx-file",
    label: "Invoices",
  },
];
