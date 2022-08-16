interface SectionProps {
  children?: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  return (
    <div className={'mx-auto max-w-5xl'}>
      {props.children}
    </div>
  );
};
