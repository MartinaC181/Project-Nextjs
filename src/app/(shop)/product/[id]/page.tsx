
export default function Page( {params} : {params: {id: string}} ) {
  const { id } = params;
    return (
        <div className="w-[1200px] flex flex-col items-center">
            <div className="text-2xl text-gray-900"> Product ID {id}</div>
        </div>
    );
}