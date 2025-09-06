import Image from "next/image"

export default  async function profile() {
    const session = await auth();
    console.log(session);
    return(
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-6 lg:px-16 bg-gray-50">
             <div className="w-full md:w-[350px] flex flex-col gap-4 shadow-lg rounded-md">
                <div className="flex justify-center">
                    <Image
                    width={80}
                    height={80}
                    src="/homes2.webp"
                    alt="profile-Image"
                    className="w-[80px] h-[80px] rounded-full"/>
                </div>
                <p>MkDollarz</p>
                <p></p>
             </div>
        </main>
    )
}