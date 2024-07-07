import { InteractiveAreaChart } from "@/components/charts/area/interactive-area";
import { MultipleLineChart } from "@/components/charts/line/multiple";
import { DonutPieTextChart } from "@/components/charts/pie/donut-with-text";
import { RadialGridChart } from "@/components/charts/radial/grid";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RecentSales } from "@/components/recent-sales";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NeoButton from "@/components/custom/button";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>

          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MultipleLineChart />
              <Card>
                <CardHeader>
                  <CardTitle>디자인 시스템</CardTitle>
                  <CardDescription>
                    <div>한번 제작 하시면 다시 재사용 가능</div>
                    <div>
                      리액트로 커스텀 제작해드림으로 저희가 추천하시는 방식으로
                      하시면 프론트엔드는 웹, 태블렛, 모바일등등 저희가
                      제작해드리는 부품은 위에 새로운 스타일만 얹히면 새로운
                      느낌 / 다른 어플 (view in light mode)
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-5">
                    <NeoButton>NeoBrutalism</NeoButton>
                  </div>
                  <Separator />
                  <div className="p-5">
                    <Button>Base</Button>
                  </div>
                </CardContent>
              </Card>
              {/* <DonutPieTextChart /> */}
              <Card>
                <CardHeader>
                  <CardTitle>Report an issue</CardTitle>
                  <CardDescription>
                    What area are you having problems with?
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="security-level">Security Level</Label>
                      <Select defaultValue="2">
                        <SelectTrigger
                          id="security-level"
                          className="line-clamp-1 w-[160px] truncate"
                        >
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">
                            Severity 1 (Highest)
                          </SelectItem>
                          <SelectItem value="2">Severity 2</SelectItem>
                          <SelectItem value="3">Severity 3</SelectItem>
                          <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="I need help with..." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please include all information relevant to your issue."
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-between space-x-2">
                  <Button variant="ghost">Cancel</Button>
                  {/* <NeoButton>Cancel</NeoButton> */}
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
              <RadialGridChart />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  {/* <Overview /> */}
                  <InteractiveAreaChart />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Employee Performance</CardTitle>
                  <CardDescription>Hourly tip</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
