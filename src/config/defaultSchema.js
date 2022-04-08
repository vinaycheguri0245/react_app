const DEFAULT_SCHEMA = {
  schema: {
    title: "Stay Connected.",
    type: "object",
    properties: {
      fullName: {
        title: "Full Name",
        type: "string",
        name: "fullName",
      },
      email: {
        title: "Email",
        type: "string",
        name: "email",
      },
      currentJobTitle: {
        title: "Your job title",
        type: "string",
        name: "currentJobTitle",
      },
      username: {
        title: "username",
        type: "string",
        name: "username",
      },
      stepNum: {
        title: "stepNum",
        type: "string",
        name: "stepNum",
        default: "1",
      },
      applyType: {
        title: "applyType",
        type: "string",
        name: "applyType",
        default: "JTC",
      },
      loginType: {
        title: "loginType",
        type: "string",
        name: "loginType",
        default: "registration",
      },
      isJtnApply: {
        title: "isJtnApply",
        type: "string",
        name: "isJtnApply",
        default: "true",
      },
      jobId: {
        title: "jobId",
        type: "string",
        name: "jobId",
        default: "JOBID",
      },
      jobTitle: {
        title: "jobTitle",
        type: "string",
        name: "jobTitle",
        default: "JOBTITLE",
      },
      jobSeqNo: {
        title: "jobSeqNo",
        type: "string",
        name: "jobSeqNo",
        default: "JOBSEQNO",
      },
      resumePath: {
        title: "resumePath",
        type: "string",
        name: "resumePath",
      },
    },
    required: ["fullName", "jobTitle", "email"],
  },
  uiSchema: {
    fullName: {
      classNames: "form-fields",
      htmlType: "text",
      "ui:required": true,
    },
    email: {
      classNames: "form-fields",
      htmlType: "text",
      "ui:required": true,
    },
    currentJobTitle: {
      classNames: "form-fields",
      htmlType: "text",
      "ui:required": true,
    },
    username: {
      htmlType: "text",
      "ui:widget": "text",
      fieldMapping: "email",
    },
    stepNum: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    applyType: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    loginType: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    isJtnApply: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    jobId: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    jobTitle: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    jobSeqNo: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
    resumePath: {
      htmlType: "hidden",
      "ui:widget": "hidden",
    },
  },
  errorMessage: {
    fullName: {
      required: "is a required field",
    },
    email: {
      required: "is a required field",
    },
    jobTitle: {
      required: "is a required field",
    },
    resumePath: {
      required: "Please upload your Resume",
    },
  },
  layout: {
    column: "1",
  },
  cloudWidget: {
    commonCloudOptions: {
      resumeInfoText: "Upload your resume and get noticed by recruiters",
      suppResFileType: "doc, docx, pdf, rtf or txt",
      suppResFileSize: 3,
      resumeFileSizeErrorMsg: "Please choose file less than 3 MB",
      resumeFailureMessage:
        "Please choose a file type from doc, docx, pdf, rtf or txt.",
      resumeSuccessMessage: "Your resume has been uploaded successfully.",
      enableFileUpload: true,
      resumeLabelText: "Upload Resume",
      orText: "OR",
    },
    cloudSpecific: {
      enableCloudUpload: false,
    },
    postSubmit: {
      postSubmitUrl: false,
      submitButtonText: "Submit",
    },
    eventOptions: {
      enableEventFlag: false,
    },
    acceptTerms: {
      __html: "I agree to the <a>terms and condition</a>",
    },
  },
};

export default DEFAULT_SCHEMA;
