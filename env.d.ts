interface ImportMetaEnv {
    readonly SERVICE_ID: string;
    readonly TEMPLATE_ID: string;
    readonly USER_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }