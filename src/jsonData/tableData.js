export const tableSampleColumns = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Name", key: "userName", component: "blodText" },
  { label: "Email", key: "email", component: "text" },
  { label: "Status", key: "isVerified", component: "booleanStatus" },
  { label: "Action Status", key: "isVerified", component: "booleanSwicthBtn" },
  {
    label: "Populated Text",
    key: "reportedBy",
    component: "populatedText",
    filed: "email",
  },
  {
    label: "View",
    key: "_id",
    component: "view",
    basePath: "admindashboard/users/details",
  },
  { label: "Delete", key: "_id", component: "deleteIcon" },
];

export const tableSampleData = [
  {
    _id: "667659286b30f4e5104fdc81",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: false,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",

    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "sohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: false,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "mohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    isVerified: true,
    reportedBy: {
      _id: "67311f1007ecdb93139923cf",
      name: "sandeep",
      email: "sandeep@gmail.com",
    },
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
];

// User List Table userAvator
export const userTableColumns = [
  { label: "S No", key: "_id", component: "number" },
  { label: "User ", key: "userImg", component: "userAvator" },
  { label: "Created At ", key: "createdAt", component: "date" },
  { label: "Name", key: "name", component: "blodText" },
  { label: "User Name", key: "userName", component: "blodText" },
  { label: "Email", key: "email", component: "blodText" },
  { label: "Register By", key: "authBy", component: "blodText" },
  { label: "Status", key: "isVerified", component: "booleanStatus" },
  {
    label: "View",
    key: "_id",
    component: "view",
    basePath: "dashboard/user-detail",
  },
];

export const blogtableColumns = [
  { label: "S No", key: "_id", component: "number", icon: "" },
  {
    label: "Thumblinser",
    key: "blogThumblin",
    component: "singleImg",
    icon: "",
  },
  { label: "Title", key: "blogTitle", component: "blodText", icon: "" },
  { label: "Date ", key: "createdAt", component: "date" },
  {
    label: "views",
    key: "viewCount",
    component: "numberText",
    icon: "icon",
  },
  {
    label: "Position",
    key: "rankingPoint",
    component: "numberText",
    icon: "icon",
  },
];

export const superAdminblogColumns = [
  { label: "Fatured Status", key: "featured", component: "booleanSwicthBtn" },
];

export const repotedblogtableColumns = [
  { label: "S No", key: "_id", component: "number", icon: "" },
  {
    label: "Thumblinser",
    key: "blogThumblin",
    component: "singleImg",
    icon: "",
  },
  { label: "Title", key: "blogTitle", component: "blodText", icon: "" },
  { label: "Date ", key: "createdAt", component: "date" },
  {
    label: "views",
    key: "viewCount",
    component: "numberText",
    icon: "icon",
  },
  {
    label: "Position",
    key: "rankingPoint",
    component: "numberText",
    icon: "icon",
  },
  {
    label: "Report content ",
    key: "reportAction",
    component: "multiStatus",
    icon: "",
  },
  {
    label: "Actioned",
    key: "reportContent",
    component: "multiStatus",
    icon: "",
  },
];

export const reporedBlogsuperAdminblogColumns = [
  {
    label: "Report Action",
    key: "reportContent",
    component: "threeStateSwitchBtn",
    icon: "",
  },
];

export const featuredTagTableColumns = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Date ", key: "createdAt", component: "date" },
  { label: "Name", key: "tagName", component: "blodText" },
  { label: "featured", key: "featured", component: "booleanSwicthBtn" },
  { label: "Delete", key: "_id", component: "deleteIcon" },
];

export const VerificationTagTableColumns = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Date ", key: "createdAt", component: "date" },
  { label: "Name", key: "tagName", component: "blodText" },
  { label: "Verification", key: "Verification", component: "booleanSwicthBtn" },
  { label: "Delete", key: "_id", component: "deleteIcon" },
];

export const superAdminTagColumns = [];
