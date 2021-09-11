export default function FileUploadSingle() {
  return <>
    <form action='/v1/upload/single' method='POST' encType='multipart/form-data'>
      <input type='file' name='singleFile' />
      <input type='text' name='title' />
      <button type='submit'>업로드</button>
    </form>
  </>
}
