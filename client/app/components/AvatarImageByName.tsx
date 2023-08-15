interface AvatarImageByNameProps {
  name: string;
  color: string;
}

export const AvatarImageByName = ({ name, color }: AvatarImageByNameProps) => {
  return (
    <div
      className={`flex items-center justify-center h-8 w-8 -ml-2 border-solid border-[2px] border-sky-50 rounded-full text-slate-50 ${color}`}>
      {Array.from(name)[0].toUpperCase()}
    </div>
  );
};
