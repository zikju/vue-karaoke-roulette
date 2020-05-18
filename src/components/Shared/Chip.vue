<template>
    <div class="md-chip">
        <slot></slot>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    $md-chip-height: 32px;
    $md-chip-color: #e0e0e0;

    .md-chip {
        display: inline-block;
        background: $md-chip-color;
        padding: 0 12px;
        margin: 0 6px 10px 0;
        border-radius: 32px;
        font-size: 13px;
        height: $md-chip-height;
        line-height: $md-chip-height;
        color:black;
        text-transform: uppercase;
        &.used{
            opacity: 0.5;
            span{
                text-decoration: line-through;
            }
        }

        .md-chip-remove {
            display: inline-block;
            background: #aaa;
            border: 0;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            padding: 0;
            margin: 0 -4px 0 4px;
            cursor: pointer;
            font: inherit;
            line-height: 20px;
            &:after {
                color: $md-chip-color;
                content: 'x';
            }
            &:hover {
                background: #999;
            }
            &:active {
                background: #777;
            }
            &.pink{
                &:after {
                    color: $md-chip-color;
                    content: '!';
                }
            }
        }
    }



</style>