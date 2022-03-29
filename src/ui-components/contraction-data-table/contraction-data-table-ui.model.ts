export interface ContractionDataTableUiModel {
  length: number; // seconds
  timeApart: number; // seconds
  startTime: Date;
  endTime: Date | null;
}
