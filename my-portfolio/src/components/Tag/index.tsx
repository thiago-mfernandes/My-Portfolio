interface Tag {
  value: string,
  class: string,
}

export default function Tag(props: Tag) {
  return (
    <div className={props.class}>
      &lt;{}&gt; {props.value} &lt;{}/&gt;      
    </div>
  );
}
