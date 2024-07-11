import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Convidados</h2>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Lilica Filha</span>
                                    <span className="block text-sm text-zinc-400 truncate">
                                        lilicafilha@gmail.com
                                    </span>
                                </div>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Ikelino Guaipeca</span>
                                    <span className="block text-sm text-zinc-400 truncate">
                                        ike.lino@gmail.com
                                    </span>
                                </div>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                            </div>
                        </div>
                        <Button size="full" variant="secondary">
                            <UserCog className="size-5"/>
                            Gerenciar convidados 
                        </Button>
                    </div>
    )
}