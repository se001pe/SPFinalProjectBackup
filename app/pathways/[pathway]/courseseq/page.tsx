import Image from "next/image";
export default async function CourseSeqPage ( { params } ) {
    const {pathway} = await params;

    if (pathway === "computer-science") {
        return (
            <div className = "w-full text-center">
                <Image
                src = "/courseseqcs.png"
                alt = "CS Course Sequence"
                width = {800}
                height = {1200}
            />
            </div>
        );
    };

  if (pathway === "biomed") {
        return (
            <div className = "w-full text-center">
                <Image
                src = "/courseseqbs.png"
                alt = "Biomedical Course Sequence"
                width = {800}
                height = {1200}
            />
            </div>
        );
    };

    if (pathway === "engineering") {
        return (
            <div className = "w-full text-center">
                <Image
                src = "/courseseqeng.png"
                alt = "Engineering Course Sequence"
                width = {800}
                height = {1200}
            />
            </div>
        );
    };
};