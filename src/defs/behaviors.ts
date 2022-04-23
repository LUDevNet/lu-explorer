interface BehaviorType {
    name: string;
    image?: string;
    shape?: "circle",
    children?: Record<string, string> | boolean | "seq";
};

const behaviorTypes: BehaviorType[] = [
    null, // 0
    { // 1
        name: "BasicAttack",
        image: "textures/ui/inventory/skills/knight_blade.png",
        children: {
            'on_success': 'success',
            'on_fail_armor': 'fail armor',
            'on_fail_blocked': 'fail blocked'
        },
    },
    { // 2
        name: "TacArc",
        image: "textures/ui/inventory/skills/skills_blow_dart.png",
        children: {
            'action': '',
            'blocked action': 'blocked',
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
        name: "Heal"
    },
    { // 6
        name: "Movement\nSwitch",
        children: {
            'jump_action': 'jump',
            'double_jump_action': 'double jump',
            'falling_action': 'falling',
            'ground_action': 'ground',
            'jetpack_action': 'jetpack',
        }
    },
    { // 7
        name: "AreaOfEffect",
        image: "textures/ui/inventory/skills/bubble_generator.png",
        children: {
            'action': ''
        }
    },
    { // 8
        name: "Play Effect",
        image: "textures/ui/inventory/skills/disco_ball.png",
    },
    null, // 9
    null, // 10
    null, // 11
    { // 12
        name: "OverTime",
        image: "textures/ui/inventory/skills/spark_thrower.png",
        children: {
            'action': ''
        }
    },
    { // 13
        name: "Imagination"
    },
    { // 14
        name: "TargetCaster",
        children: {
            'action': ''
        }
    },
    { // 15
        name: "Stun",
        image: "textures/ui/inventory/skills/bonedaddy.png",
    },
    { // 16
        name: "Duration",
        image: "textures/ui/inventory/skills/spark_thrower.png",
        children: {
            'action': ''
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
            'action': '',
        }
    },
    null, // 19
    null, // 20
    null, // 21
    { // 22
        name: "Repair Armor",
    },
    { // 23
        name: "Speed",
    },
    null, // 24
    { // 25
        name: "LootBuff",
        image: "textures/ui/inventory/skills/skills_lucky.png",
    },
    null, // 26
    { // 27
        name: "Spawn",
        image: "textures/ui/inventory/skills/crabby.png",
    },
    null, // 28
    { // 29
        name: "Switch",
        children: {
            'action_true': 'true',
            'action_false': 'false',
        }
    },
    { // 30
        name: "Buff"
    },
    null, // 31
    { // 32
        name: "Skill\nEvent",
    },
    null, // 33
    { // 34
        name: "Skill Cast\nFailed",
        image: "textures/ui/inventory/skills/skills_marks_the_spot.png",
    },
    null, // 35
    null, // 36
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
            "hit_action": 'hit',
            "hit_action_enemy": 'hit enemy',
            "timeout_action": 'timeout',
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
            'action': null
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
            'action': null
        }
    },
    { // 46
        name: "End",
        // FIXME: add parent connection
    },
    { // 47
        name: "AlterChainDelay",
        image: "textures/ui/inventory/skills/spark_thrower.png",
    },
    null, // 48
    null, // 49
    null, // 50
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
            action: ''
        }
    },
    { // 55
        name: "Taunt"
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
    null, // 57
    { // 58
        name: "PullToPoint",
        image: "textures/ui/inventory/skills/skills_snap_trap.png",
    }
];
