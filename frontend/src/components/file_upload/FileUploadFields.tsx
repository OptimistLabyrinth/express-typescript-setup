export default function FileUploadFields() {
  return <>
    <form action='/v1/upload/fields' method='POST' encType='multipart/form-data'>
      <input type='file' name='file1' />
      <input type='file' name='file2' />
      <input type='text' name='title' />
      <button type='submit'>업로드</button>
    </form>
  </>
}