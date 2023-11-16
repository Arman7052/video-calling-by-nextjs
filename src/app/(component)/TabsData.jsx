const TabsData = [
  {
    title: "PreviousConsultation",
    name: "Previous Consultation",
    content: [
      {
        date: "2023-10-04",
        time: "10:00 AM",
        doctor: "Dr. John Smith",
        summary:
          "Patient presented with complaints of cough and fever for 3 days. Physical examination revealed mild pharyngitis. Diagnosis of viral upper respiratory infection was made. Patient was advised to rest, hydrate, and use over-the-counter pain relievers.",
      },
      {
        date: "2023-09-21",
        time: "02:00 PM",
        doctor: "Dr. Jane Doe",
        summary:
          "Patient came in for routine check-up. Vital signs were normal. Patient was advised to continue with current medications and lifestyle habits.",
      },
      {
        type: "Blood Test",
        date: "2023-08-25",
        results: "Normal blood count and cholesterol levels.",
      },
    ],
  },
  {
    title: "HealthLogs",
    name: "Health Logs",
    content: [
      {
        date: "2023-11-02",
        log: "Blood Pressure: 120/80, Heart Rate: 75 bpm, Weight: 150 lbs",
      },
      {
        date: "2023-10-15",
        log: "Blood Pressure: 118/78, Heart Rate: 72 bpm, Weight: 148 lbs",
      },
      {
        date: "2023-11-02",
        log: "Blood Pressure: 120/80, Heart Rate: 75 bpm, Weight: 150 lbs",
      },
      {
        date: "2023-10-15",
        log: "Blood Pressure: 118/78, Heart Rate: 72 bpm, Weight: 148 lbs",
      },
    ],
  },
  {
    title: "HealthVault",
    name: "Health Vault",
    content: [
      {
        type: "X-Ray",
        date: "2023-09-10",
        results: "No abnormalities detected in the chest X-ray.",
      },
      {
        type: "Blood Test",
        date: "2023-08-25",
        results: "Normal blood count and cholesterol levels.",
      },
    ],
  },
  {
    title: "ConsultationInfo",
    content: [
      {
        date: "2023-11-16",
        time: "11:30 AM",
        doctor: "Dr. Sarah Johnson",
        summary:
          "Follow-up consultation for ongoing back pain. Physical examination and review of symptoms conducted. Adjusted medication dosage and recommended physiotherapy.",
      },
    ],
    name: "Consultation Info",
  },
  {
    title: "Symptoms",
    content: ["Persistent cough", "Fever", "Back pain", "Headache"],
    name: "Symptoms",
  },

  {
    title: "Medication",
    name: "Medications",
    content: [
      {
        name: "Ibuprofen",
        dosage: "200mg",
        frequency: "Twice daily",
      },
      {
        name: "Medication",
        dosage: "10mg",
        frequency: "Once daily",
      },
    ],
  },
];
export default TabsData;
