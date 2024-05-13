"use client";

export const fetchAssetInfo = async () => {
  try {
    const response = await fetch("/imag", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching asset info:", error);
  }
};
