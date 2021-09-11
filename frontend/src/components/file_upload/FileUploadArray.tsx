export default function FileUploadArray() {
  return <>
    <form action='/v1/upload/array' method='POST' encType='multipart/form-data'>
      <input type='file' name='files' multiple />
      <input type='text' name='title' />
      <button type='submit'>업로드</button>
    </form>
  </>
}