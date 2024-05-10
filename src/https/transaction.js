export const genreateSignature = async (data, authHeader) => {
  const res = await fetch(
    "https://upi-banking-backend-api.vercel.app/transaction/generateSignature",
    {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const resData = await res.json();

  if (res.status !== 201) {
    throw Error(resData.message);
  }

  return resData;
};

export const makeTransaction = async (data, authHeader) => {
  let url;
  if (data.acNo) {
    url =
      "https://upi-banking-backend-api.vercel.app/transaction/makeTranscationUsingAccNo";
  }

  if (data.phone) {
    url =
      "https://upi-banking-backend-api.vercel.app/transaction/makeTranscationUsingPhoneNo";
  }

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (res.status !== 201) {
    throw Error(resData.message);
  }

  return resData;
};

export const getTransaction = async (userId, authHeader, type) => {
  let url;
  if (type === "sent") {
    url =
      "https://upi-banking-backend-api.vercel.app/transaction/getHistorySent/";
  }

  if (type === "receive") {
    url =
      "https://upi-banking-backend-api.vercel.app/transaction/getHistoryReceive/";
  }

  const res = await fetch(url + userId, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });

  const resData = await res.json();

  if (res.status !== 200) {
    throw Error(resData.message);
  }

  return resData;
};
