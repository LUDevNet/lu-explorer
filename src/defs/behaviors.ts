interface BehaviorType {
    name: string;
    image?: string;
    shape?: "circle",
    children?: Record<string, string> | boolean | "seq";
    parents?: Record<string, string>;
    skills?: Record<string, string>;
};

export const behaviorTypes: BehaviorType[] = [
    null, // 0
    { // 1
        name: "BasicAttack",
        image: "textures/ui/inventory/skills/knight_blade.png",
        children: {
            on_success: 'success',
            on_fail_armor: 'fail armor',
            on_fail_blocked: 'fail blocked',
        },
    },
    { // 2
        name: "TacArc",
        image: "textures/ui/inventory/skills/skills_blow_dart.png",
        children: {
            'action': '',
            'blocked action': 'blocked',
            'miss action': 'miss',
        }
    },
    { // 3
        name: "And",
        shape: 'circle',
        children: true,
    },
    { // 4
        name: "Projectile Attack",
        image: "textures/ui/inventory/skills/skills_flaming_arrow.png",
    },
    { // 5
        name: "Heal",
    },
    { // 6
        name: "Movement\nSwitch",
        children: {
            jump_action: 'jump',
            double_jump_action: 'double jump',
            falling_action: 'falling',
            ground_action: 'ground',
            jetpack_action: 'jetpack',
        }
    },
    { // 7
        name: "AreaOfEffect",
        image: "textures/ui/inventory/skills/bubble_generator.png",
        children: {
            action: ''
        }
    },
    { // 8
        name: "Play Effect",
        image: "textures/ui/inventory/skills/disco_ball.png",
    },
    { // 9
        name: "Immunity",
    },
    { // 10
        name: "Damage Buff",
    },
    { // 11
        name: "Damage Absorption",
    },
    { // 12
        name: "OverTime",
        image: "textures/ui/inventory/skills/spark_thrower.png",
        skills: {
            'action': '',
        }
    },
    { // 13
        name: "Imagination",
    },
    { // 14
        name: "Target Caster",
        children: {
            action: '',
        }
    },
    { // 15
        name: "Stun",
        image: "textures/ui/inventory/skills/bonedaddy.png",
        children: {
            action: '',
        }
    },
    { // 16
        name: "Duration",
        image: "textures/ui/inventory/skills/spark_thrower.png",
        children: {
            action: '',
        }
    },
    { // 17
        name: "Knockback",
        image: "textures/ui/inventory/skills/skills_repulsion.png",
    },
    { // 18
        name: "AttackDelay",
        image: "textures/ui/inventory/skills/turtle_rush.png",
        children: {
            action: '',
        }
    },
    { // 19
        name: "Car Boost",
        children: {
            action: '',
            action_failed: 'failed',
        }
    },
    { // 20
        name: "Fall Speed",
    },
    { // 21
        name: "Shield",
    },
    { // 22
        name: "Repair Armor",
    },
    { // 23
        name: "Speed",
    },
    { // 24
        name: "Dark Inspiration",
        children: {
            action: '',
        }
    },
    { // 25
        name: "LootBuff",
        image: "textures/ui/inventory/skills/skills_lucky.png",
    },
    { // 26
        name: "Venture Vision",
    },
    { // 27
        name: "Spawn",
        image: "textures/ui/inventory/skills/crabby.png",
        children: {
            spawn_fail_action: 'spawn fail',
        }
    },
    { // 28
        name: "LayBrick",
    },
    { // 29
        name: "Switch",
        children: {
            action_true: 'true',
            action_false: 'false',
        }
    },
    { // 30
        name: "Buff",
    },
    { // 31
        name: "Skill Event",
    },
    { // 32
        name: "Skill\nEvent",
    },
    { // 33
        name: "Consume Item",
        children: {
            action_consumed: 'consumed', // TODO verify
        }
    },
    { // 34
        name: "Skill Cast\nFailed",
        image: "textures/ui/inventory/skills/skills_marks_the_spot.png",
    },
    { // 35
        name: "Imitation\nSkunkStink",
    },
    { // 36
        name: "Change\nIdleFlags",
    },
    { // 37
        name: "ApplyBuff",
        image: "textures/ui/inventory/skills/skills_health_buff.png",
    },
    { // 38
        name: "Chain",
        children: "seq",
    },
    { // 39
        name: "ChangeOrientation",
        image: "textures/ui/inventory/skills/skills_whirlwind.png",
    },
    { // 40
        name: "ForceMovement",
        children: {
            hit_action: 'hit',
            hit_action_enemy: 'hit enemy',
            timeout_action: 'timeout',
        }
    },
    { // 41
        name: "Interrupt",
        image: "textures/ui/inventory/skills/skills_marks_the_spot.png",
    },
    { // 42
        name: "AlterCooldown",
        image: "textures/ui/inventory/skills/spark_thrower.png",
    },
    { // 43
        name: "ChargeUp",
        children: {
            action: ''
        }
    },
    { // 44
        name: "SwitchMultiple",
        children: "seq"
    },
    { // 45
        name: "Start",
        image: "textures/ui/inventory/skills/skills_freebuild.png",
        children: {
            action: ''
        }
    },
    { // 46
        name: "End",
        parents: {
            start_action: 'start',
        }
    },
    { // 47
        name: "AlterChainDelay",
        image: "textures/ui/inventory/skills/spark_thrower.png",
        parents: {
            chain_action: 'chain'
        }
    },
    { // 48
        name: "Camera",
    },
    { // 49
        name: "Remove\nBuff",
    },
    { // 50
        name: "Grab",
    },
    { // 51
        name: "ModularBuild",
        image: "textures/ui/inventory/hats/thinking_hat.png",
    },
    { // 52
        name: "NPC\nCombat\nSkill",
        children: "seq"
    },
    { // 53
        name: "Block",
        children: {
            break_action: 'break',
        }
    },
    { // 54
        name: "Verify",
        children: {
            action: '',
            blocked_action: 'blocked',
        }
    },
    { // 55
        name: "Taunt",
    },
    { // 56
        name: "AirMovement",
        image: "textures/ui/inventory/skills/body_slam.png",
        children: {
            ground_action: 'ground',
            hit_action: 'hit',
            hit_action_enemy: 'hit enemy',
            timeout_action: 'timeout',
        }
    },
    { // 57
        name: "Spawn\nQuickbuild",
        children: {
            spawn_fail_action: 'spawn fail',
        }
    },
    { // 58
        name: "PullTo\nPoint",
        image: "textures/ui/inventory/skills/skills_snap_trap.png",
    },
    { // 59
        name: "Property\nRotate",
    },
    { // 60
        name: "Damage\nReduction",
    },
    { // 61
        name: "Property\nTeleport",
    },
    { // 62
        name: "Clear\nTarget",
        children: {
            action: '',
        }
    },
    { // 63
        name: "Take\nPicture",
    },
    { // 64
        name: "Mount",
    },
    { // 65
        name: "Skill\nSet",
    }
];
