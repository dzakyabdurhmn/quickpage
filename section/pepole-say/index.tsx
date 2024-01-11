import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/card";

function index() {
  return (
    <div className="flex items-center justify-center mt-20  mx-auto max-w-[1000px]">
      <div className="flex flex-col  space-y-8">
        <div className="flex-row xl:gap-4 xl:flex">
          <p className="flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
            <span>
              “Koo started to adopt BentoML more than a year ago as a platform
              of choice for model deployments and monitoring. From our early
              experience it was clear that deploying ML models, a statistic that
              most companies struggle with, was a solved problem for Koo. The
              BentoML team works closely with their community of users like I've
              never seen before. Their AMAs, the advocacy on Slack and getting
              on calls with their customers, are much appreciated by
              early-adopters and seasoned users”
            </span>
            <span className="font-semibold">
              Harsh Singhal, Head of Machine Learning,{" "}
              <span className="font-bold">Koosssss</span>
            </span>
          </p>
          <p className=" border-[3px] space-y-7 mt-5 xl:mt-0 rounded-xl flex flex-col border-black px-7  py-7">
            <span>
              “Koo started to adopt BentoML more than a year ago as a platform
              of choice for model deployments and monitoring. From our early
              experience it was clear that deploying ML models, a statistic that
            </span>
            <span className="font-semibold">
              Harsh Singhal, Head of Machine Learning,{" "}
              <span className="font-bold">Koo</span>
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex-row xl:flex gap-5">
          <p className="border-[3px] space-y-7 rounded-xl flex flex-col border-black px-7  py-7">
            <span>
              “Koo started to adopt BentoML more than a year ago as a platform
              of choice for model deployments and monitoring. From our early
              experience it was clear that deploying ML models, a statistic that
            </span>
            <span className="font-semibold">
              Harsh Singhal, Head of Machine Learning,{" "}
              <span className="font-bold">Koosss</span>
            </span>
          </p>
          <p className="flex flex-col space-y-4 mt-5  xl:mt-0 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
            <span>
              “Koo started to adopt BentoML more than a year ago as a platform
              of choice for model deployments and monitoring. From our early
              experience it was clear that deploying ML models, a statistic that
              most companies struggle with, was a solved problem for Koo. The
              BentoML team works closely with their community of users like I've
              never seen before. Their AMAs, the advocacy on Slack and getting
              on calls with their customers, are much appreciated by
              early-adopters and seasoned users”
            </span>
            <span className="font-semibold">
              Harsh Singhal, Head of Machine Learning,{" "}
              <span className="font-bold">Koo</span>
            </span>
          </p>
        </div>
        <div className="flex space-x-4">
          <p className=" flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
            <span>
              “Koo started to adopt BentoML more than a year ago as a platform
              of choice for model deployments and monitoring. From our early
              experience it was clear that deploying ML models, a statistic that
              most companies struggle with, was a solved problem for Koo. The
              BentoML team works closely with their community of users like I've
              never seen before. Their AMAs, the advocacy on Slack and getting
              on calls with their customers, are much appreciated by
              early-adopters and seasoned users”
            </span>
            <span className="font-semibold">
              Harsh Singhal, Head of Machine Learning,{" "}
              <span className="font-bold">Koo</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;

{
  /* <Card className="px-10 py-10 max-w-[823px] min-w-[823px] max-h-[309px] min-h-[309px] border border-black p-10">
            <CardContent>
              <p>
                “Koo started to adopt BentoML more than a year ago as a platform
                of choice for model deployments and monitoring. From our early
                experience it was clear that deploying ML models, a statistic
                that most companies struggle with, was a solved problem for Koo.
                The BentoML team works closely with their community of users
                like I've never seen before. Their AMAs, the advocacy on Slack
                and getting on calls with their customers, are much appreciated
                by early-adopters and seasoned users”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card>
          <Card className="px-10 py-10 max-w-[576px] min-w-[576px] max-h-[309px] min-h-[309px]">
            <CardContent>
              <p>
                “BentoML is helping us future-proof our machine learning
                deployment infrastructure at Mission Lane. It is enabling us to
                rapidly develop and test our model scoring services , and to
                seamlessly deploy them into our dev, staging, and production
                Kubernetes clusters.”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card> */
}

{
  /* <Card className="px-10 py-10 max-w-[823px] min-w-[823px] max-h-[309px] min-h-[309px] border border-black p-10">
            <CardContent>
              <p>
                “Koo started to adopt BentoML more than a year ago as a platform
                of choice for model deployments and monitoring. From our early
                experience it was clear that deploying ML models, a statistic
                that most companies struggle with, was a solved problem for Koo.
                The BentoML team works closely with their community of users
                like I've never seen before. Their AMAs, the advocacy on Slack
                and getting on calls with their customers, are much appreciated
                by early-adopters and seasoned users”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card>
          <Card className="px-10 py-10 max-w-[576px] min-w-[576px] max-h-[309px] min-h-[309px]">
            <CardContent>
              <p>
                “BentoML is helping us future-proof our machine learning
                deployment infrastructure at Mission Lane. It is enabling us to
                rapidly develop and test our model scoring services , and to
                seamlessly deploy them into our dev, staging, and production
                Kubernetes clusters.”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card> */
}
