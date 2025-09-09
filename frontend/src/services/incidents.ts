import { api, type ApiResponse } from "@/lib/api";
import type { CreateIncidentPayload, Incident } from "@/types/incidents";

const INCIDENTS_ENDPOINT = "/incidents";

export function getIncidents() {
  return api.get<ApiResponse<Incident[]>>(INCIDENTS_ENDPOINT);
}

export function createIncident(payload: CreateIncidentPayload) {
  return api.post<void>(INCIDENTS_ENDPOINT, payload);
}