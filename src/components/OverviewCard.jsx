import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OverviewCard = ({title, number, icon, difference}) => {
  return (
    
      <Card className={"border-[#4B0082] w-full md:w-[30%] h-[185px] gap-3"}>
        <CardHeader>
          <CardTitle className={"text-lg"}>{title}</CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent className={"flex justify-between gap-10"}>
          <span className="text-4xl font-bold text-[#06C91D]">{number}</span>
          <img src={icon} alt="" />
        </CardContent>
        <CardFooter>
          <span>{difference} vs last month</span>
        </CardFooter>
      </Card>
   
  );
};

export default OverviewCard;
