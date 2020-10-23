import {
  PROJECT_RESOURCE, ProjectResource, PROJECT_FIELDS_RESOURCE, ProjectFieldsResource,
  DOCUMENT_COMPLETE_QC_RESOURCE,
  DocumentCompleteQCResource,
  DOCUMENT_PAUSE_RESOURCE,
  DocumentPauseResource,
  // QC
  DOCUMENT_PAUSE_QC_RESOURCE,
  DocumentPauseQCResource,
  FIELD_ERROR_DEF_QC_RESOURCE,
  FieldErrorDefinitionsQCResource,
  SECTION_ALL_QC_RESOURCE,
  SectionAllQCResource,
  TASKS_QC_RESOURCE,
  TasksQCResource,
  DATA_DOC_QC_RESOURCE,
  DataDocQCResource,
  MAX_CLAIM_QC_RESOURCE,
  MaxLengthQCResource,

  // APPROVE QC
  HUMAN_TASK_APPROVE_QC_RESOURCE,
  HumanTaskApproveQCResource,
  TASKS_APPROVE_QC_RESOURCE,
  TasksApproveQCResource,
  SECTION_ALL_APPROVE_QC_RESOURCE,
  SectionAllApproveQCResource,
  DOCUMENT_COMPLETE_APPROVE_QC_RESOURCE,
  DocumentCompleteApproveQCResource,

  SAVE_APPROVE_QC_RESOURCE,
  SaveApproveQCResource,

  // classify batch
  TASKS_CLASSIFY_BATCH_RESOURCE,
  TasksClassifyBatchResource,
} from './resources'
import { ReportResource, REPORT_RESOURCE } from './resources/report';
import { SectionsResource, SECTIONS_RESOURCE } from './resources/section';
import { KEYING_TASK_RESOURCE, KeyingResource } from './resources/keying_task';
import { DocumentsResource, DOCUMENTS_RESOURCE } from './resources/documents';
import { ProjectLabelResource, PROJECT_LABEL_RESOURCE } from './resources/project_labels';
export type IResource = (type: string, resource: string, params: string) => Promise<any>;

interface IResourceRegistries {
  [key: string]: IResource
}


const ResourceRegistries: IResourceRegistries = {
  [PROJECT_RESOURCE]: ProjectResource,
  [PROJECT_FIELDS_RESOURCE]: ProjectFieldsResource,
  [REPORT_RESOURCE]: ReportResource,
  [SECTIONS_RESOURCE]: SectionsResource,
  [KEYING_TASK_RESOURCE]: KeyingResource,
  [DOCUMENT_PAUSE_RESOURCE]: DocumentPauseResource,
  [DOCUMENTS_RESOURCE]: DocumentsResource,

  //qc
  [DATA_DOC_QC_RESOURCE]: DataDocQCResource,
  [DOCUMENT_COMPLETE_QC_RESOURCE]: DocumentCompleteQCResource,
  [DOCUMENT_PAUSE_QC_RESOURCE]: DocumentPauseQCResource,
  [FIELD_ERROR_DEF_QC_RESOURCE]: FieldErrorDefinitionsQCResource,
  [SECTION_ALL_QC_RESOURCE]: SectionAllQCResource,
  [TASKS_QC_RESOURCE]: TasksQCResource,
  [MAX_CLAIM_QC_RESOURCE]: MaxLengthQCResource,
  
  // approve qc
  [HUMAN_TASK_APPROVE_QC_RESOURCE]: HumanTaskApproveQCResource,
  [TASKS_APPROVE_QC_RESOURCE]: TasksApproveQCResource,
  [SECTION_ALL_APPROVE_QC_RESOURCE]: SectionAllApproveQCResource,
  [DOCUMENT_COMPLETE_APPROVE_QC_RESOURCE]: DocumentCompleteApproveQCResource,
  
  [SAVE_APPROVE_QC_RESOURCE]: SaveApproveQCResource,

  // classify batch
  [TASKS_CLASSIFY_BATCH_RESOURCE]: TasksClassifyBatchResource,
  [PROJECT_LABEL_RESOURCE]:ProjectLabelResource
};

export const registryResource = (name: string, resource: IResource): void => {
  ResourceRegistries[name] = resource;
}
export const unregistryResource = (name: string): void => {
  delete ResourceRegistries[name];
}

export const getResourceRegistries = (): IResourceRegistries => {
  return ResourceRegistries;
}
export const getResourceRegistry = (name: string): IResource => {
  if (ResourceRegistries[name]) {
    return ResourceRegistries[name];
  }
  return (type: string, resource: string, params: string): Promise<any> => {
    return Promise.reject(`Resource:"${resource}" has not registed!`)
  }
}
