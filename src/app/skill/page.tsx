import BootstrapIcon from "@/components/svg/bootstrapIcon";
import CssIcon from "@/components/svg/cssIcon";
import FlaskIcon from "@/components/svg/flaskIcon";
import FlowbiteIcon from "@/components/svg/flowbiteIcon";
import HtmlIcon from "@/components/svg/htmlIcon";
import JsIcon from "@/components/svg/jsIcon";
import NextIcon from "@/components/svg/nextIcon";
import PythonIcon from "@/components/svg/pythonIcon";
import ReactIcon from "@/components/svg/reactIcon";
import ShadCnIcon from "@/components/svg/shadcnIcon";
import TailwindIcon from "@/components/svg/tailwindIcon";
import { VercelIcon } from "@/components/svg/vercelIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skill() {
  return (
    <div className="w-full flex justify-center items-center mt-25">
      <div className="w-9/12">
        <h1 className="text-sky-400 text-4xl font-bold text-center">Skill</h1>

        <div className="mt-20">
          <Tabs defaultValue="soft">
            <TabsList className="w-full flex justify-center">
              <TabsTrigger value="soft" className="text-2xl cursor-pointer">
                Soft Skill
              </TabsTrigger>
              <TabsTrigger value="hard" className="text-2xl cursor-pointer">
                Hard Skill
              </TabsTrigger>
            </TabsList>
            <TabsContent value="soft">
              <Card>
                <CardContent className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <h1 className="font-bold text-gray-600 text-center hover:text-sky-400">
                      Communication
                    </h1>
                  </div>

                  <div className="col-span-1">
                    <h1 className="font-bold text-gray-600 text-center hover:text-sky-400">
                      Team Work
                    </h1>
                  </div>

                  <div className="col-span-1">
                    <h1 className="font-bold text-gray-600 text-center hover:text-sky-400">
                      Leadership
                    </h1>
                  </div>

                  <div className="col-span-1">
                    <h1 className="font-bold text-gray-600 text-center hover:text-sky-400">
                      Time Management
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hard">
              <Card>
                <CardContent className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <HtmlIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <CssIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <JsIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <PythonIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <ReactIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <NextIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <FlaskIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <TailwindIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <BootstrapIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <FlowbiteIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <ShadCnIcon />
                  </div>

                  <div className="col-span-1 flex justify-center items-center mt-2">
                    <VercelIcon />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
