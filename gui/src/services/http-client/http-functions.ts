import * as dotenv from "dotenv";

dotenv.config();

const jsonMimeType = "application/json";

const handleErrors = (response: Response) => {
  if (!response.ok) {
    const error = Error(response.statusText);
    throw error;
  }
  return response;
};

const apiVersion = "v1";
// const apiAddress = process.env.REACT_APP_API_ADDRESS || "localhost";
// const apiPort = process.env.REACT_API_PORT || "8080";
// const apiURL = `/api/${apiVersion}/`;
const apiURL = "http://localhost:5000/";

export async function getJsonFromApi<ResponseT>(
  url: string
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "get",
    headers: {
      Accept: jsonMimeType,
    },
  }).then(handleErrors);

  if (!res) {
    return null;
  }
  console.log(res);
  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function getImageFromApi<ResponseT>(
  url: string
): Promise<ResponseT> {
  const res = await fetch(apiURL + url, {
    method: "get",
    headers: {
      Accept: "image",
    },
  }).then(handleErrors);
  const resJson = await res;
  return (resJson as unknown) as ResponseT;
}

export function getUrlFromApi(url: string) {
  return apiURL + url;
}

export async function postJsonToApi<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url + req, {
    method: "post",
    headers: new Headers({
      "Content-Type": jsonMimeType,
      Accept: jsonMimeType,
    }),
    body: JSON.stringify(req),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiDataset<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: JSON.stringify(req),
    headers: new Headers({
      "Content-Type": jsonMimeType,
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiSample<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: JSON.stringify(req),
    headers: new Headers({
      "Content-Type": jsonMimeType,
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiModel<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: JSON.stringify(req),
    headers: new Headers({
      "Content-Type": jsonMimeType,
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function putJsonToApiSample<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "put",
    body: JSON.stringify(req),
    headers: new Headers({
      "Content-Type": jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function putJsonToApi<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "put",
    body: JSON.stringify(req),
    headers: new Headers({
      "Content-Type": jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiImage<RequestT, ResponseT>(
  url: string,
  req: FormData
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: req,

    headers: new Headers({
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiFolder<RequestT, ResponseT>(
  url: string,
  req: FormData
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: req,

    headers: new Headers({
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiPrediction<RequestT, ResponseT>(
  url: string,
  req: FormData
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: req,
    headers: new Headers({
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function postJsonToApiEntry<RequestT, ResponseT>(
  url: string,
  req: RequestT
): Promise<ResponseT | null> {
  const res = await fetch(apiURL + url, {
    method: "post",
    body: JSON.stringify(req),
    headers: new Headers({
      "Content-Type": jsonMimeType,
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();
  return resJson as ResponseT;
}

export async function deleteJsonFromApi(url: string): Promise<string | null> {
  const res = await fetch(apiURL + url, {
    method: "delete",
    headers: new Headers({
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);
  if (!res) {
    return null;
  }
  const resJson = await res.json();
  return resJson;
}

export async function deleteImageFromApi(
  url: string,
  force: boolean
): Promise<string | null> {
  const forceDelete = force ? "true" : "false";
  const res = await fetch(apiURL + url + "?force=" + forceDelete, {
    method: "delete",
    headers: new Headers({
      Accept: jsonMimeType,
    }),
  }).then(handleErrors);

  if (!res) {
    return null;
  }

  const resJson = await res.json();

  return resJson;
}

export async function deleteJsonFromApiModel(
  url: string
): Promise<string | null> {
  const res = await fetch(apiURL + url, {
    method: "delete",
  }).then(handleErrors);
  if (!res) {
    return null;
  }
  const resJson = await res.json();
  return resJson;
}

export function getUrlApiAddr() {
  const res = apiURL;
  return res;
}
