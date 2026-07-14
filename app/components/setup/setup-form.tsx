'use client';

import { createSetup } from '@/app/actions/setup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SetupForm() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Complete school setup</CardTitle>
        <CardDescription>
          Create your school profile and the first admin account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createSetup} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School name</Label>
              <Input id="schoolName" name="schoolName" placeholder="Green Valley School" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolEmail">School email</Label>
              <Input id="schoolEmail" name="schoolEmail" type="email" placeholder="contact@school.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolPhone">School phone</Label>
              <Input id="schoolPhone" name="schoolPhone" placeholder="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolAddress">School address</Label>
              <Input id="schoolAddress" name="schoolAddress" placeholder="123 Main Street" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="adminName">Admin name</Label>
              <Input id="adminName" name="adminName" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminUsername">Admin username</Label>
              <Input id="adminUsername" name="adminUsername" placeholder="admin" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminPhone">Admin phone</Label>
              <Input id="adminPhone" name="adminPhone" placeholder="(555) 765-4321" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminPassword">Admin password</Label>
              <Input id="adminPassword" name="adminPassword" type="password" placeholder="••••••••" required />
            </div>
          </div>

          <Button type="submit">Create setup</Button>
        </form>
      </CardContent>
    </Card>
  );
}
