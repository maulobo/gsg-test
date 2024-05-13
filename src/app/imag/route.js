const cloudinary = require("cloudinary").v2;

export async function GET(request) {
  const options = {
    type: "upload",
    max_results: 100, // Ajusta según sea necesario
    prefix: "prueba/",
  };

  try {
    // Get details about the asset
    const result = await cloudinary.api.resources(options);
    const imageUrls = await result.resources.map((resource) => resource.url);

    return Response.json(imageUrls);
  } catch (error) {
    console.error(error);
  }

  return Response.json({ message: "llego", data: imageUrls });
}
