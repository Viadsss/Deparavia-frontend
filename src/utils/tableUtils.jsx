import { format } from "date-fns";
import { createTheme } from "react-data-table-component";

createTheme("chakraLight", {
  text: {
    primary: "#2D3748", // Chakra's default gray.800
    secondary: "#4A5568", // Chakra's default gray.600
  },
  background: {
    default: "#FFFFFF", // Chakra's default gray.50
  },
  context: {
    background: "#E2E8F0", // Chakra's default gray.200
    text: "#2D3748", // Chakra's default gray.800
  },
  divider: {
    default: "#CBD5E0", // Chakra's default gray.300
  },
  button: {
    default: "#3182CE", // Chakra's default blue.500
    hover: "rgba(49, 130, 206, 0.08)", // Chakra's blue.500 with opacity
    focus: "rgba(49, 130, 206, 0.24)", // Chakra's blue.500 with higher opacity
  },
  sortFocus: {
    default: "#3182CE", // Chakra's default blue.500
  },
});

createTheme("chakraDark", {
  text: {
    primary: "#E2E8F0", // Chakra's default gray.200
    secondary: "#A0AEC0", // Chakra's default gray.400
  },
  background: {
    default: "#1A202C", // Chakra's default gray.900
  },
  context: {
    background: "#2D3748", // Chakra's default gray.800
    text: "#E2E8F0", // Chakra's default gray.200
  },
  divider: {
    default: "#4A5568", // Chakra's default gray.600
  },
  button: {
    default: "#3182CE", // Chakra's default blue.500
    hover: "rgba(49, 130, 206, 0.08)", // Chakra's blue.500 with opacity
    focus: "rgba(49, 130, 206, 0.24)", // Chakra's blue.500 with higher opacity
  },
  sortFocus: {
    default: "#3182CE", // Chakra's default blue.500
  },
  selected: {
    default: "rgba(0, 0, 0, .7)",
    text: "#FFFFFF",
  },
  highlightOnHover: {
    default: "rgba(49, 130, 206, .5)",
    text: "#FFFFFF",
  },
});

// const defaultTheme = {
//   text: {
//     primary: "rgba(0, 0, 0, 0.87)",
//     secondary: "rgba(0, 0, 0, 0.54)",
//     disabled: "rgba(0, 0, 0, 0.38)",
//   },
//   background: {
//     default: "#FFFFFF",
//   },
//   context: {
//     background: "#e3f2fd",
//     text: "rgba(0, 0, 0, 0.87)",
//   },
//   divider: {
//     default: "rgba(0,0,0,.12)",
//   },
//   button: {
//     default: "rgba(0,0,0,.54)",
//     focus: "rgba(0,0,0,.12)",
//     hover: "rgba(0,0,0,.12)",
//     disabled: "rgba(0, 0, 0, .18)",
//   },
//   selected: {
//     default: "#e3f2fd",
//     text: "rgba(0, 0, 0, 0.87)",
//   },
//   highlightOnHover: {
//     default: "#EEEEEE",
//     text: "rgba(0, 0, 0, 0.87)",
//   },
//   striped: {
//     default: "#FAFAFA",
//     text: "rgba(0, 0, 0, 0.87)",
//   },
// };

const admissionRows = [
  {
    admissionID: "ADM-20240514-PAT-JV-001",
    patientID: "PAT-JV-001",
    doctorID: null,
    admissionDate: "2024-05-13T16:00:00.000Z",
    dischargeDate: null,
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-JV-002",
    patientID: "PAT-JV-002",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "aabcd kasda kda skd adkas asld a o wak dawk ",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-MF-001",
    patientID: "PAT-MF-001",
    doctorID: null,
    admissionDate: "2024-07-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Masakit ang likod at kasu-kasuan",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-MM-001",
    patientID: "PAT-MM-001",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "hehehe hehehe e e",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-001",
    patientID: "PAT-RQ-001",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-002",
    patientID: "PAT-RQ-002",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
];

const mockRows2 = [
  {
    admissionID: "ADM-20240514-PAT-JV-001",
    patientID: "PAT-JV-001",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-13T16:00:00.000Z",
    dischargeDate: null,
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-JV-002",
    patientID: "PAT-JV-002",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "aabcd kasda kda skd adkas asld a o wak dawk ",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-MF-001",
    patientID: "PAT-MF-001",
    doctorID: null,
    admissionDate: "2024-07-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Masakit ang likod at kasu-kasuan",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-MM-001",
    patientID: "PAT-MM-001",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "hehehe hehehe e e",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-001",
    patientID: "PAT-RQ-001",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-002",
    patientID: "PAT-RQ-002",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: "DOC-WO-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
];

const mockRows3 = [
  {
    admissionID: "ADM-20240517-PAT-JV-002",
    patientID: "PAT-JV-002",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "aabcd kasda kda skd adkas asld a o wak dawk ",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-MF-001",
    patientID: "PAT-MF-001",
    doctorID: null,
    admissionDate: "2024-07-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Masakit ang likod at kasu-kasuan",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-MM-001",
    patientID: "PAT-MM-001",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "hehehe hehehe e e",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-001",
    patientID: "PAT-RQ-001",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-002",
    patientID: "PAT-RQ-002",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: null,
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: "DOC-JD-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240517-PAT-RQ-003",
    patientID: "PAT-RQ-003",
    doctorID: "DOC-WO-001",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: null,
    complaints: "Hahah hahah aa\nasjdaskd a\ns das d\n",
    medications: null,
    procedure: null,
    diagnosis: null,
  },
];

const doctorRows = [
  {
    doctorID: "DOC-WO-001",
    doctorName: "Willie Ong",
    doctorStartTime: "04:00:00",
    doctorEndTime: "19:00:00",
  },
  {
    doctorID: "DOC-JD-001",
    doctorName: "Jhana Mae Dela Cruz",
    doctorStartTime: "06:00:00",
    doctorEndTime: "22:00:00",
  },
];

const doctorRowsUpdate = [
  {
    doctorID: "DOC-WO-001",
    doctorName: "Willie Ong",
    doctorStartTime: "14:00:00",
    doctorEndTime: "22:00:00",
  },
  {
    doctorID: "DOC-JD-001",
    doctorName: "Jhana Mae Dela Cruz",
    doctorStartTime: "06:00:00",
    doctorEndTime: "22:00:00",
  },
];

const doctorRowsInsert = [
  {
    doctorID: "DOC-WO-001",
    doctorName: "Willie Ong",
    doctorStartTime: "04:00:00",
    doctorEndTime: "19:00:00",
  },
  {
    doctorID: "DOC-HP-001",
    doctorName: "Hazel Ann Pangilinan",
    doctorStartTime: "04:00:00",
    doctorEndTime: "19:00:00",
  },
  {
    doctorID: "DOC-JD-001",
    doctorName: "Jhana Mae Dela Cruz",
    doctorStartTime: "06:00:00",
    doctorEndTime: "22:00:00",
  },
  {
    doctorID: "DOC-JD-001",
    doctorName: "Kaye Regala",
    doctorStartTime: "06:00:00",
    doctorEndTime: "22:00:00",
  },
];

const admissionColumns = [
  {
    name: "Admission ID",
    selector: (row) => row.admissionID,
    sortable: true,
    width: "250px",
  },
  {
    name: "Patient ID",
    selector: (row) => row.patientID,
    sortable: true,
  },
  {
    name: "Doctor ID",
    selector: (row) => (row.doctorID ? row.doctorID : ""),
    sortable: true,
  },
  {
    name: "Admission Date",
    selector: (row) => format(row.admissionDate, "yyyy-MM-dd"),
    sortable: true,
  },
  {
    name: "Discharge Date",
    selector: (row) =>
      row.dischargeDate ? format(row.dischargeDate, "yyyy-MM-dd") : "",
    sortable: true,
  },
  {
    name: "Complaints",
    selector: (row) => (row.complaints ? row.complaints : ""),
  },
  {
    name: "Medications",
    selector: (row) => (row.medications ? row.medications : ""),
  },
  {
    name: "Procedure",
    selector: (row) => (row.precdure ? row.procedure : ""),
  },
  {
    name: "Diagnosis",
    selector: (row) => (row.diagnosis ? row.diagnosis : ""),
  },
  // {
  //   name: "Status",
  //   selector: (row) =>
  //     row.doctorID ? (
  //       <Badge colorScheme="green">Discharged</Badge>
  //     ) : (
  //       <Badge>Admitted</Badge>
  //     ),
  //   sortable: true,
  //   width: "150px",
  // },
];

const doctorColumns = [
  {
    name: "Doctor ID",
    selector: (row) => row.doctorID,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.doctorName,
    sortable: true,
  },
  {
    name: "Start Time",
    selector: (row) => row.doctorStartTime,
    sortable: true,
  },
  {
    name: "End Time",
    selector: (row) => row.doctorEndTime,
    sortable: true,
  },
];

const patientColumns = [
  {
    name: "Patient ID",
    selector: (row) => row.patientID,
    sortable: true,
  },
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Middle Name",
    selector: (row) => (row.middleName ? row.middleName : ""),
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "Sex",
    selector: (row) => row.sex,
    sortable: true,
  },
  {
    name: "Height",
    selector: (row) => row.height,
    sortable: true,
  },
  {
    name: "Weight",
    selector: (row) => row.weight,
    sortable: true,
  },
  {
    name: "Marital Status",
    selector: (row) => row.maritalStatus,
    sortable: true,
  },
  {
    name: "Contact Number",
    selector: (row) => row.contactNumber,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: (row) => (row.emailAddress ? row.emailAddress : ""),
    sortable: true,
  },
  {
    name: "Street Address",
    selector: (row) => row.streetAddress,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "Province",
    selector: (row) => row.province,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
  {
    name: "Emergency Name",
    selector: (row) => row.emergencyName,
  },
  {
    name: "Emergency Relationship",
    selector: (row) => row.emergencyRelationship,
  },
  {
    name: "Emergency Contact Number",
    selector: (row) => row.emergencyContactNumber,
  },
];

const visitorColumns = [
  { name: "Visitor ID", selector: (row) => row.visitorID, sortable: true },
  {
    name: "Patient ID",
    selector: (row) => row.patientID,
    sortable: true,
  },
  {
    name: "Date of Visit",
    selector: (row) => row.visitorDate,
    sortable: true,
  },
  {
    name: "Visitor Name",
    selector: (row) => row.visitorName,
    sortable: true,
  },
  {
    name: "Relationship",
    selector: (row) => row.visitorRelationship,
  },
  { name: "Contact Number", selector: (row) => row.visitorContactNumber },
];

const patientRows = [
  {
    patientID: "PAT-JV-001",
    firstName: "John Paul",
    lastName: "Viado",
    middleName: "jd",
    dateOfBirth: "2003-11-20",
    sex: "M",
    height: "1.74",
    weight: "65",
    maritalStatus: "S",
    contactNumber: "09203031531",
    emailAddress: "johnpaulviado07@gmail.com",
    streetAddress: "#413 Sta. Monica St., Brgy. Bato",
    city: "Quezon City",
    province: "Metro Manila",
    zipCode: "1127",
    emergencyName: "Mother Name Viado",
    emergencyRelationship: "Mother",
    emergencyContactNumber: "09203031531",
  },
  {
    patientID: "PAT-JD-001",
    firstName: "Jhana Mae",
    lastName: "Dela Cruz",
    middleName: "",
    dateOfBirth: "2003-12-09",
    sex: "F",
    height: "1.70",
    weight: "58",
    maritalStatus: "M",
    contactNumber: "09623531531",
    emailAddress: "asdasdad@gmail.com",
    streetAddress: "#413 Sta. Monica St., Brgy. Bato",
    city: "Quezon City",
    province: "Metro Manila",
    zipCode: "1127",
    emergencyName: "Father Name Dela Cruz",
    emergencyRelationship: "Mother",
    emergencyContactNumber: "09623531531",
  },
];

const visitorRows = [
  {
    visitorID: "1",
    patientID: "PAT-JV-001",
    visitorDate: "2024-05-26",
    visitorName: "visitor Name",
    visitorRelationship: "Father",
    visitorContactNumber: "09156759451",
  },
  {
    visitorID: "2",
    patientID: "PAT-KR-001",
    visitorDate: "2024-05-26",
    visitorName: "Hazel Ann Pangilinan",
    visitorRelationship: "Sibling",
    visitorContactNumber: "09156759451",
  },
];

const doctorDashboardColumns = [
  {
    name: "Admission ID",
    selector: (row) => row.admissionID,
    sortable: true,
    width: "250px",
  },
  {
    name: "Patient ID",
    selector: (row) => row.patientID,
    sortable: true,
  },
  {
    name: "Full Name",
    selector: (row) => row.fullName,
    sortable: true,
  },
  {
    name: "Sex",
    selector: (row) => row.sex,
    sortable: true,
  },
  {
    name: "Height",
    selector: (row) => row.height,
    sortable: true,
  },
  {
    name: "Weight",
    selector: (row) => row.weight,
    sortable: true,
  },
  {
    name: "Complaints",
    selector: (row) => (row.complaints ? row.complaints : ""),
  },
  {
    name: "Medications",
    selector: (row) => (row.medications ? row.medications : ""),
  },
  {
    name: "Procedure",
    selector: (row) => (row.procedure ? row.procedure : ""),
  },
  {
    name: "Diagnosis",
    selector: (row) => (row.diagnosis ? row.diagnosis : ""),
  },
];

const doctorDashboardRows = [
  {
    admissionID: "ADM-20240514-PAT-JV-001",
    patientID: "PAT-JV-001",
    fullName: "Viado, John Paul Padua",
    sex: "M",
    height: "1.74",
    weight: "65",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: null,
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240514-PAT-JD-001",
    patientID: "PAT-JD-001",
    fullName: "Dela Cruz, Jhana Mae",
    sex: "F",
    height: "1.20",
    weight: "40",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: null,
    diagnosis: null,
  },
];

const doctorDashboardRowsUpdateProcedure = [
  {
    admissionID: "ADM-20240514-PAT-JV-001",
    patientID: "PAT-JV-001",
    fullName: "Viado, John Paul Padua",
    sex: "M",
    height: "1.74",
    weight: "65",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit\nTapos inom maligamgam",
    diagnosis: null,
  },
  {
    admissionID: "ADM-20240514-PAT-JD-001",
    patientID: "PAT-JD-001",
    fullName: "Dela Cruz, Jhana Mae",
    sex: "F",
    height: "1.20",
    weight: "40",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: null,
  },
];

const doctorDashboardRowsUpdateDiagnosis = [
  {
    admissionID: "ADM-20240514-PAT-JD-001",
    patientID: "PAT-JV-001",
    fullName: "Viado, John Paul Padua",
    sex: "M",
    height: "1.74",
    weight: "65",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: "Overdose sa biogesic",
  },
  {
    admissionID: "ADM-20240514-PAT-JD-001",
    patientID: "PAT-JD-001",
    fullName: "Dela Cruz, Jhana Mae",
    sex: "F",
    height: "1.20",
    weight: "40",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: "Overdose sa biogesic",
  },
];

const doctorDashboardRowsUpdateDischarge = [
  {
    admissionID: "ADM-20240514-PAT-JD-001",
    patientID: "PAT-JD-001",
    fullName: "Dela Cruz, Jhana Mae",
    sex: "F",
    height: "1.20",
    weight: "40",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: "Overdose sa biogesic",
  },
  {
    admissionID: "ADM-20240514-PAT-JD-001",
    patientID: "PAT-JD-001",
    fullName: "Dela Cruz, Jhana Mae",
    sex: "F",
    height: "1.20",
    weight: "40",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: "Overdose sa biogesic",
  },
];

const patientDashBoardAdmissionsColumns = [
  {
    name: "Admission ID",
    selector: (row) => row.admissionID,
    sortable: true,
  },
  {
    name: "Doctor Name",
    selector: (row) => row.doctorName,
    sortable: true,
  },
  {
    name: "Complaints",
    selector: (row) => (row.complaints ? row.complaints : ""),
  },
  {
    name: "Medications",
    selector: (row) => (row.medications ? row.medications : ""),
  },
  {
    name: "Procedure",
    selector: (row) => (row.procedure ? row.procedure : ""),
  },
  {
    name: "Diagnosis",
    selector: (row) => (row.diagnosis ? row.diagnosis : ""),
  },
  {
    name: "Admission Date",
    selector: (row) =>
      row.admissionDate ? format(row.admissionDate, "yyyy-MM-dd") : "",
    sortable: true,
  },
  {
    name: "Discharge Date",
    selector: (row) =>
      row.dischargeDate ? format(row.dischargeDate, "yyyy-MM-dd") : "",
    sortable: true,
  },
];

const patientDashBoardAdmissionsRows = [
  {
    admissionID: "ADM-20240514-PAT-JV-001",
    doctorName: "Willie Ong",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: "Overdose sa biogesic",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: "2024-05-27T16:00:00.000Z",
  },
  {
    admissionID: "ADM-20240514-PAT-JV-001",
    doctorName: "Willie Ong",
    complaints: "My Head is Hurting\nMy Tummy is Aching",
    medications: "Biogesic lima",
    procedure: "Limang Biogesic ulit",
    diagnosis: "Overdose sa biogesic",
    admissionDate: "2024-05-16T16:00:00.000Z",
    dischargeDate: "2024-05-27T16:00:00.000Z",
  },
];

const patientDashBoardVisitorColumns = [
  {
    name: "Visitor Name",
    selector: (row) => row.visitorName,
    sortable: true,
  },
  {
    name: "Relationship",
    selector: (row) => row.visitorRelationship,
    sortable: true,
  },
  {
    name: "Contact Number",
    selector: (row) => row.visitorContactNumber,
  },
  {
    name: "Date of Visit",
    selector: (row) => format(row.visitorDate, "yyyy-MM-dd"),
    sortable: true,
  },
];

const patientDashBoardVisitorRows = [
  {
    visitorName: "Ler Iseah Kaye Regala",
    visitorRelationship: "Friend",
    visitorContactNumber: "096934878473",
    visitorDate: "2024-05-17T16:00:00.000Z",
  },
  {
    visitorName: "Ler Iseah Kaye Regala",
    visitorRelationship: "Friend",
    visitorContactNumber: "096934878473",
    visitorDate: "2024-05-17T16:00:00.000Z",
  },
  {
    visitorName: "Ler Iseah Kaye Regala",
    visitorRelationship: "Friend",
    visitorContactNumber: "096934878473",
    visitorDate: "2024-05-17T16:00:00.000Z",
  },
];

export {
  admissionColumns,
  doctorColumns,
  patientColumns,
  visitorColumns,
  admissionRows,
  doctorRows,
  patientRows,
  visitorRows,
  mockRows2,
  mockRows3,
  doctorRowsInsert,
  doctorRowsUpdate,
  doctorDashboardColumns,
  doctorDashboardRows,
  doctorDashboardRowsUpdateProcedure,
  doctorDashboardRowsUpdateDiagnosis,
  doctorDashboardRowsUpdateDischarge,
  patientDashBoardAdmissionsColumns,
  patientDashBoardAdmissionsRows,
  patientDashBoardVisitorColumns,
  patientDashBoardVisitorRows,
};
