import '../Style/info.css'

export default function Info({body, style}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="container">{body}</div>
    </div>
  );
}
