import Button from "@/components/Button/Button";
import Image from "next/image";

const FeaturedJobCard = ({ job }) => {
    const { title, price, clientName, clientPhotoURL, jobType, jobDescription, experienceLevel, postedTime } = job;
    return (
        <div className="bg-white rounded-lg w-full border border-neutral-100 shadow hover:shadow-md">
            <div className="flex justify-between bg-green-50 rounded-t-lg p-4">
                {/* client info */}
                <div className="flex flex-col gap-1 shrink-0">
                    <Image
                        className="w-10 h-10 rounded-full"
                        src={clientPhotoURL}
                        alt="client photo"
                        width={100}
                        height={100}
                        quality={100} />
                    <p className="p">{clientName}</p>
                </div>
                {/* posted time */}
                <div className="flex flex-col gap-1 shrink-0 text-green-900 text-xs font-medium">
                     <p className="p">Posted</p>
                     <p className="p text-green-900 font-medium">{postedTime}</p>
                </div>
            </div>
            {/* job info */}
            <div className="flex flex-col items-start gap-4 p-4">
                <div className="grid gap-2">
                    <h3 className="h5 text-green-900">{title}</h3>
                    <span className="px-2 py-1 bg-green-500/10 font-medium text-xs text-green-900 w-fit rounded-full">{jobType}</span>
                </div>
                <div className="flex justify-between gap-2 w-full">
                    <div>
                        <p className="p text-green-900 font-medium">${price}</p>
                        <p className="p">Fixed Price</p>
                    </div>
                    <div>
                        <p className="p text-green-900 font-medium">{experienceLevel}</p>
                        <p className="p">Experience Label</p>
                    </div>
                </div>
                <p className="p">{jobDescription}</p>
                <Button size="sm">Apply Now</Button>
            </div>
        </div>
    );
};

export default FeaturedJobCard;