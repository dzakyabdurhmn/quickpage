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
    <div className="flex items-center justify-center mt-20 max-w-max bg-green-200 mx-auto">
      <div className="flex flex-col p-3 ml-10 mr-10">
        <div className="flex space-x-4">
          <Card className="px-10 py-10 max-w-[823px] min-w-[823px] max-h-[309px] min-h-[309px] border border-black p-10">
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
          </Card>
        </div>
      </div>
    </div>
  );
}

export default index;
