const uploadToImgBB = async (files) => {
  const uploadedUrls = [];

  console.log(files);

  for (let file of files) {
    const formData = new FormData();
    formData.append("image", file);

    console.log(process.env.NEXT_PUBLIC_IMGBB_API_KEY);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    console.log(data);

    if (data.success) {
      uploadedUrls.push(data.data.url);
    }
  }

  return uploadedUrls;
};

export default uploadToImgBB;