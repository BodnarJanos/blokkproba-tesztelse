namespace blokkproba {
    //  %blockId = blokkprobaxor
    //  %block="kizarovagy '|' $a $b"
    //  % color=5 weight=100 icon="\uf1ec"
    //  % groups=['Led']
    //  % a.min=10 a.max=100 a.defl=15
    export function xor(a: number, b: number): number {
        return a ^ b
    }
    
    //% blockId = "array_pop_statement" block="remove last value from $list"
    //% blockAliasFor=Array.pop"
    export function _popStatement(): void;
   

}

